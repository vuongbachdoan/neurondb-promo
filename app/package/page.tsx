"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Copy } from "lucide-react"
import { useState } from "react"

export default function PackagePage() {
  const [copied, setCopied] = useState(false)

  const copyInstallCommand = () => {
    navigator.clipboard.writeText("pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            NeuronDB <span className="text-green-400">Package</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Install NeuronDB from TestPyPI and start building neural graph databases
          </p>
          <Badge variant="outline" className="border-green-400 text-green-400">
            v0.2.0
          </Badge>
        </div>

        <Card className="bg-gray-900 border-gray-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-200">
              <Download className="h-5 w-5 text-green-400" />
              Installation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
              <code className="text-green-400 text-sm">
                pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0
              </code>
              <Button
                size="sm"
                variant="ghost"
                onClick={copyInstallCommand}
                className="ml-4 text-gray-300 hover:text-white border-0"
              >
                {copied ? "Copied!" : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-200">Quick Start</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-800 p-4 rounded text-sm text-green-400">
{`# Start server
neurondbd -v

# Connect client
neurondb -h localhost -P 4306

# Run NQL commands
INGEST "AI research";
FIRE "AI" STEPS=2 TOPK=5;`}
              </pre>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-200">Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white">Python</span>
                <Badge variant="secondary">3.8+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Memory</span>
                <Badge variant="secondary">4GB+</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Platform</span>
                <Badge variant="secondary">macOS, Ubuntu</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center gap-4">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-bold"
              onClick={() => window.open("https://test.pypi.org/project/neurondb/", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View on TestPyPI
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white border-0"
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}