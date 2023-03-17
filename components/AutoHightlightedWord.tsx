"use client";

import { useEffect } from "react";

export default function AutoHighlightedWord({ highlightedWord }) {
  useEffect(() => {
    const findNodeByContent = (
      text,
      root = document.querySelector("#post-content")
    ) => {
      const splittedText = text.split(" ");
      const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let found = false;
      while (treeWalker.nextNode() && !found) {
        const node = treeWalker.currentNode;
        if (!node.textContent || node.nodeType !== Node.TEXT_NODE) return;
        if (
          splittedText.every((word) => {
            return node.textContent
              ?.toLocaleLowerCase()
              .includes(word.toLocaleLowerCase());
          })
        ) {
          return node.parentNode;
        }
      }
      return found;
    };

    const highlightedNode = findNodeByContent(highlightedWord);
    if (!highlightedNode) return;
    (highlightedNode as Element).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    (highlightedNode as Element).classList.add("animate-pulse");
    (highlightedNode as Element).classList.add("origin-left");
    setTimeout(() => {
      (highlightedNode as Element).classList.remove("animate-pulse");
    }, 4000);
  }, [highlightedWord]);

  return null;
}
