"use client"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkDownRendererProps {
    content: string;
}
export function MarkDownRenderer({content}: MarkDownRendererProps) {
    return (
        <div className="prose prose-gray max-w-none dark:prose-invert">
            <ReactMarkdown
             remarkPlugins={[remarkGfm]}
             components={{
                h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mb-3">{children}</h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mb-2">{children}</h3>
                ),
                p: ({ children }) => (
                    <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="list-disc list-inside mb-4 space-y-1">{children}</blockquote>
                ),
                code: ({ children }) => (
                    <code className="list-disc list-inside mb-4 space-y-1">{children}</code>
                ),
                pre: ({ children }) => (
                    <pre className="list-disc list-inside mb-4 space-y-1">{children}</pre>
                ),
             }}
             >{content}
             </ReactMarkdown>
        </div>
    )
}