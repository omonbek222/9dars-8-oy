import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-10">
          <h1 className="text-3xl font-semibold mb-6">Next.js</h1>
          <p className="mb-6">Install and configure <strong>shadcn/ui</strong> for Next.js.</p>

          <div className="flex space-x-3 mb-6">
            <button className="bg-black text-white px-3 py-1 rounded">npx</button>
            <button className="border px-3 py-1 rounded">npm</button>
            <button className="border px-3 py-1 rounded">yarn</button>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Create Project</h2>
            <p className="mb-2">Use the following command to initialize the project with <code>npx</code>:</p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
              <code>npx shadcn@latest init</code>
            </pre>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Add Components</h2>
            <p className="mb-2">You can now start adding components like <code>button</code>.</p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded">
              <code>npx shadcn@latest add button</code>
            </pre>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Import Example</h2>
            <p className="mb-2">After adding the component, import it like this:</p>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-auto">
              <code>import &#123; Button &#125; from "@/components/ui/button"</code>
            </pre>
          </section>
        </main>
      </div>
    </div>
  );
}
