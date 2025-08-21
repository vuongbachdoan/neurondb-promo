"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Code, Home } from "lucide-react"
import { useState } from "react"

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [showDeveloperGuide, setShowDeveloperGuide] = useState(false)
  const [showQuickStart, setShowQuickStart] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyQuickStart = () => {
    const text = `# Install
pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0

# Start server
neurondbd -v

# Connect & run
neurondb -h localhost -P 4306
INGEST "AI research";
FIRE "AI" STEPS=2 TOPK=5;
LEARN COMMIT;
STATS;`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyExample = () => {
    const text = `# Start server
neurondbd -v

# Connect client
neurondb -h localhost -P 4306

# Run NQL commands
INGEST "artificial intelligence research";
FIRE "AI research" STEPS=2 TOPK=5;
LEARN COMMIT;
STATS;`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyInstall = () => {
    navigator.clipboard.writeText('pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sidebarItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'install', label: 'Install' },
    { id: 'example', label: 'Example' },
    { id: 'dependencies', label: 'Dependencies' },
    { id: 'license', label: 'License' }
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Overview</h2>
            <p className="text-gray-200 mb-4">NeuronDB is a neural graph database engine that combines semantic embeddings with neuron-like behavior for intelligent data storage and retrieval.</p>
            <p className="text-gray-300">Features include semantic embeddings, neural graph operations, NQL query language, and RAG integration.</p>
          </div>
        )
      case 'install':
        return (
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Installation</h2>
            <div className="bg-gray-800 p-4 rounded-lg mb-4 relative">
              <Button
                size="sm"
                variant="ghost"
                onClick={copyInstall}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                {copied ? "Copied!" : <CopyIcon />}
              </Button>
              <code className="text-green-400 pr-16">pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0</code>
            </div>
            <p className="text-gray-300">Requires Python 3.8+, 4GB RAM, macOS or Ubuntu.</p>
          </div>
        )
      case 'example':
        return (
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Example</h2>
            <div className="bg-gray-800 p-4 rounded-lg relative">
              <Button
                size="sm"
                variant="ghost"
                onClick={copyExample}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                {copied ? "Copied!" : <CopyIcon />}
              </Button>
              <pre className="text-green-400 text-sm pr-16">
{`# Start server
neurondbd -v

# Connect client
neurondb -h localhost -P 4306

# Run NQL commands
INGEST "artificial intelligence research";
FIRE "AI research" STEPS=2 TOPK=5;
LEARN COMMIT;
STATS;`}
              </pre>
            </div>
          </div>
        )
      case 'dependencies':
        return (
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">Dependencies</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• sentence-transformers (semantic embeddings)</li>
              <li>• FAISS (vector similarity search)</li>
              <li>• Lark (NQL parsing)</li>
              <li>• NumPy (numerical computations)</li>
              <li>• PyYAML (configuration management)</li>
            </ul>
          </div>
        )
      case 'license':
        return (
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-4">License</h2>
            <p className="text-gray-200 mb-4">MIT License</p>
            <p className="text-gray-300">Free to use, modify, and distribute. See LICENSE file for details.</p>
          </div>
        )
      default:
        return null
    }
  }

  if (showQuickStart) {
    return (
      <div className="min-h-screen bg-black text-white font-mono">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="mb-8">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white mb-4"
              onClick={() => setShowQuickStart(false)}
            >
              ← Back to Docs
            </Button>
            <h1 className="text-4xl font-bold text-green-400 mb-6">Quick Start</h1>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg relative">
              <Button
                size="sm"
                variant="ghost"
                onClick={copyQuickStart}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                {copied ? "Copied!" : <CopyIcon />}
              </Button>
              <pre className="text-green-400 text-sm pr-16">
{`# Install
pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0

# Start server
neurondbd -v

# Connect & run
neurondb -h localhost -P 4306
INGEST "AI research";
FIRE "AI" STEPS=2 TOPK=5;
LEARN COMMIT;
STATS;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showDeveloperGuide) {
    return (
      <div className="min-h-screen bg-black text-white font-mono">
        <div className="flex">
          <div className="w-64 bg-gray-900 min-h-screen p-6">
            <h3 className="text-lg font-bold text-green-400 mb-6">Developer Guide</h3>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`block w-full text-left p-2 rounded transition-colors ${
                    activeSection === item.id 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <Button
              variant="ghost"
              className="mt-8 text-gray-300 hover:text-white"
              onClick={() => setShowDeveloperGuide(false)}
            >
              ← Back to Docs
            </Button>
          </div>
          <div className="flex-1 p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-green-400">NeuronDB</span> Documentation
          </h1>
          <Badge variant="outline" className="border-green-400 text-green-400">
            v0.2.0
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gray-900 border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:scale-105 group cursor-pointer" onClick={() => setShowQuickStart(true)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-200">
                <Book className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Installation and basic commands to get started with NeuronDB</p>
              <p className="text-green-400 text-sm">Click to view →</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:scale-105 group cursor-pointer" onClick={() => setShowDeveloperGuide(true)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-200">
                <Code className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                Developer Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Complete development guide with examples and API reference</p>
              <p className="text-green-400 text-sm">Click to explore →</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="ghost"
            className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white"
            onClick={() => window.location.href = "/"}
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}