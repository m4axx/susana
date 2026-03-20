
"use client";

import { useEffect, useState } from "react";
import { generateWellnessTip } from "@/ai/flows/ai-generated-wellness-tip-flow";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function WellnessTip() {
  const [tip, setTip] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTip() {
      try {
        const result = await generateWellnessTip({});
        setTip(result.tip);
      } catch (error) {
        setTip("Encuentra la armonía en tu rutina diaria con ingredientes naturales y conscientes.");
      } finally {
        setLoading(false);
      }
    }
    fetchTip();
  }, []);

  if (loading) return null;

  return (
    <div className="bg-secondary/30 border-y border-border py-4 px-6 text-center">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-3">
        <Sparkles className="h-4 w-4 text-accent" />
        <p className="text-sm italic font-medium text-secondary-foreground">
          {tip}
        </p>
      </div>
    </div>
  );
}
