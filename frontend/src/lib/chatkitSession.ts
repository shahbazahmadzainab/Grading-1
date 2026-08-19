const readEnvString = (value: unknown): string | undefined =>
  typeof value === "string" && value.trim()
    ? value.trim()
    : undefined;

const API_URL =
  readEnvString(import.meta.env.VITE_API_URL) ||
  "http://127.0.0.1:8000";

export const workflowId = (() => {
  const id = "wf_694a787b68248190b9a6b33edac634c707c99049351a2213";

  if (!id || id.startsWith("wf_replace")) {
    throw new Error(
      "Set VITE_CHATKIT_WORKFLOW_ID in your .env file."
    );
  }

  return id;
})();

export function createClientSecretFetcher(
  workflow: string
) {
  return async (currentSecret: string | null) => {
    if (currentSecret) {
      return currentSecret;
    }

    const response = await fetch(
      `${API_URL}/api/create-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workflow: {
            id: workflow,
          },
        }),
      }
    );

    const payload = (await response.json().catch(() => ({}))) as {
      client_secret?: string;
      error?: string | { message?: string };
    };

    if (!response.ok) {
      const errorMessage =
        typeof payload.error === "string"
          ? payload.error
          : payload.error?.message || "Failed to create session";

      throw new Error(errorMessage);
    }

    if (!payload.client_secret) {
      throw new Error("Missing client secret in response");
    }

    return payload.client_secret;
  };
}