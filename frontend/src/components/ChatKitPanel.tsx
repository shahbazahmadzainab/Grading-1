import { useMemo } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import {
  createClientSecretFetcher,
  workflowId,
} from "../lib/chatkitSession";

export function ChatKitPanel() {
  const getClientSecret = useMemo(
    () => createClientSecretFetcher(workflowId),
    []
  );

  const chatkit = useChatKit({
    api: {
      getClientSecret,
    },

    startScreen: {
      greeting: "Welcome to Grading Assistant! 📝",
      prompts: [
        {
          label: "Grade an answer",
          prompt:
            "Question: What is 2 + 2?\nStudent Answer: 4",
        },
        {
          label: "Check correctness",
          prompt:
            "Question: What is the capital of Pakistan?\nStudent Answer: Islamabad",
        },
        {
          label: "Evaluate a response",
          prompt:
            "Question: Explain photosynthesis briefly.\nStudent Answer: Photosynthesis is the process by which plants make food using sunlight.",
        },
      ],
    },

    composer: {
      placeholder:
        "Enter the question and student answer to grade...",
    },

    header: {
      enabled: true,
      title: {
        enabled: true,
        text: "Grading Assistant",
      },
    },

    frameTitle: "Grading Assistant",

    theme: "light",
  });

  return (
    <div className="flex h-[90vh] w-full overflow-hidden rounded-2xl bg-white shadow-lg">
      <ChatKit
        control={chatkit.control}
        className="h-full w-full"
      />
    </div>
  );
}
