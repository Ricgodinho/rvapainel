import Layout from "@/components/Layout";
import ChatInterface from "@/components/ChatInterface";

export default function Geral() {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col">
        {/* Page Header */}
        <div className="border-b border-border/50 bg-gradient-to-b from-violet-500/10 to-transparent px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Guia Geral
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Interface conversacional com seu assistente virtual
            </p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>
    </Layout>
  );
}
