"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Database, Network, Code, Users, ArrowRight, Download, Play } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3V15M6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18M6 15C7.65685 15 9 16.3431 9 18M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9ZM18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PackageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 9.5L7.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DocsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 19V16H7C5.34315 16 4 17.3431 4 19M8.8 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8V5.2C20 4.07989 20 3.51984 19.782 3.09202C19.5903 2.71569 19.2843 2.40973 18.908 2.21799C18.4802 2 17.9201 2 16.8 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FeaturesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 17L17 14L14 11M10 7L7 10L10 13M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function NeuronEnginePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'backdrop-blur-md bg-black/80' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-black">NeuronDB</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#capabilities-header" className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1">
              <FeaturesIcon />
              Features
            </a>
            <a href="/package" className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1">
              <PackageIcon />
              Package
            </a>
            <a href="/docs" className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1">
              <DocsIcon />
              Docs
            </a>
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black font-bold" onClick={() => window.open("https://github.com/vuongbachdoan/neurondb", "_blank")}>
              <GitHubIcon />
              GitHub
            </Button>
          </nav>
        </div>
      </header>
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute top-96 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div
          className="absolute top-[600px] right-10 w-28 h-28 bg-green-500/15 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-black py-20 px-4 relative overflow-hidden pt-32">
        <div className="max-w-6xl mx-auto text-center" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-fade-in-up">
            Ship faster with <span className="text-green-400 animate-pulse">NeuronDB</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            A neural graph database that combines semantic embeddings with neuron-like behavior for intelligent data storage and retrieval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-gray-600 text-white hover:bg-gray-800 bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-400"
            >
              <MailIcon />
              Talk to us
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div 
              id="scaling-text"
              data-animate
              className={`transition-all duration-1000 ${isVisible['scaling-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Semantic Search</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                True semantic similarity search using 384-dimension embeddings. Find related concepts across languages with neural spreading activation and Hebbian learning.
              </p>
              <Button variant="link" className="text-green-400 hover:text-green-300 p-0 text-lg transition-all duration-300 hover:translate-x-2">
                Explore Semantic Search →
              </Button>
            </div>
            <div 
              id="scaling-visual"
              data-animate
              className={`relative transition-all duration-1000 delay-200 ${isVisible['scaling-visual'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transform: `translateY(${scrollY * 0.025}px)` }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 group">
                    <div className="w-8 h-8 bg-purple-500 rounded-full animate-pulse group-hover:scale-110 transition-transform"></div>
                  </div>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 group animation-delay-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse group-hover:scale-110 transition-transform"></div>
                  </div>
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-all duration-300 group animation-delay-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse group-hover:scale-110 transition-transform"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">Neural connections visualized</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div 
              id="branching-visual"
              data-animate
              className={`relative transition-all duration-1000 ${isVisible['branching-visual'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Neural Graph</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 hover:bg-gray-800/50 p-2 rounded transition-all duration-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Semantic Embeddings</span>
                  </div>
                  <div className="flex items-center gap-3 ml-6 hover:bg-gray-800/50 p-2 rounded transition-all duration-200 animation-delay-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Spreading Activation</span>
                  </div>
                  <div className="flex items-center gap-3 ml-6 hover:bg-gray-800/50 p-2 rounded transition-all duration-200 animation-delay-200">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Hebbian Learning</span>
                  </div>
                </div>
              </div>
            </div>
            <div 
              id="branching-text"
              data-animate
              className={`transition-all duration-1000 delay-200 ${isVisible['branching-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transform: `translateY(${scrollY * 0.025}px)` }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Neural Operations</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Implement spreading activation, Hebbian learning, and temporal decay. Build intelligent knowledge graphs with cross-language semantic understanding.
              </p>
              <Button variant="link" className="text-green-400 hover:text-green-300 p-0 text-lg transition-all duration-300 hover:translate-x-2">
                Explore Neural Ops →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 px-4 bg-gray-950 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            id="capabilities-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['capabilities-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">Advanced Capabilities</h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Explore the cutting-edge features that make NeuronDB the future of neural database technology.
            </p>
          </div>

          <div
            id="capabilities-grid"
            data-animate
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${isVisible['capabilities-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.015}px)` }}
          >
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <Database className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">NQL Language</h3>
              <p className="text-sm text-white group-hover:text-gray-200 transition-colors">Custom Neuron Query Language with INGEST, FIRE, LEARN commands</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300 animation-delay-100">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                <Network className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">Semantic Embeddings</h3>
              <p className="text-sm text-white group-hover:text-gray-200 transition-colors">384-dimension vectors using sentence-transformers</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300 animation-delay-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <Code className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors">RAG Integration</h3>
              <p className="text-sm text-white group-hover:text-gray-200 transition-colors">Complete RAG system with Streamlit UI and AWS Bedrock</p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-300 animation-delay-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <Users className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">Production Ready</h3>
              <p className="text-sm text-white group-hover:text-gray-200 transition-colors">Comprehensive testing, logging, and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div 
            id="code-header"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${isVisible['code-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Simple Yet Powerful</h2>
            <p className="text-xl text-white">
              Get started with NeuronDB in minutes using our intuitive NQL syntax.
            </p>
          </div>

          <div 
            id="code-example"
            data-animate
            className={`transition-all duration-1000 delay-300 ${isVisible['code-example'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.01}px)` }}
          >
            <Card className="bg-gray-900 border-2 border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-400 animate-pulse" />
                  NQL Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-800 p-6 rounded-lg overflow-x-auto text-sm font-mono text-green-400 hover:bg-gray-750 transition-colors duration-300">
                  <code>{`-- Ingest semantic data
INGEST "artificial intelligence research";
INGEST "machine learning algorithms";
INGEST "neural network architectures";

-- Semantic search with spreading activation
FIRE "AI research" STEPS=2 TOPK=5;
-- Returns: "artificial intelligence research" (0.72)
--          "machine learning algorithms" (0.51)

-- Strengthen neural pathways
LEARN COMMIT;

-- Get original text from node ID
GET "e547539d133d2197";`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-gray-950 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Perfect For</h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              NeuronDB excels in scenarios requiring semantic understanding and intelligent data relationships.
            </p>
          </div>

          <div 
            id="use-cases-grid"
            data-animate
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible['use-cases-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {[
              { title: "Semantic Search", desc: "Intelligent document and content retrieval with meaning-based matching" },
              { title: "RAG Systems", desc: "Retrieval-Augmented Generation with semantic understanding" },
              { title: "Knowledge Graphs", desc: "Cross-language semantic relationship modeling" },
              { title: "Recommendation Systems", desc: "Content similarity based on meaning, not keywords" },
              { title: "Multilingual Applications", desc: "Cross-language semantic search and understanding" },
              { title: "Research & Education", desc: "Neural algorithm prototyping with real embeddings" },
            ].map((useCase, index) => (
              <div 
                key={index} 
                className={`animate-fade-in-up`}
                style={{ 
                  transform: `translateY(${scrollY * (0.01 + index * 0.002)}px)`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                <Card className="hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 bg-gray-900 border border-gray-800 hover:border-green-500/30 hover:scale-105 group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-200 group-hover:text-green-400 transition-colors">{useCase.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors">{useCase.desc}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            id="performance-stats"
            data-animate
            className={`transition-all duration-1000 ${isVisible['performance-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              Semantic intelligence.
              <br />
              <span className="text-gray-500 animate-pulse">Neural powered.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up animation-delay-200">
                <div className="text-6xl font-black text-green-400 mb-2 hover:scale-110 transition-transform duration-300 cursor-default">
                  384<span className="text-2xl animate-pulse">dim</span>
                </div>
                <p className="text-gray-300">Semantic vector dimensions using sentence-transformers for true meaning-based search.</p>
              </div>
              <div className="relative animate-fade-in-up animation-delay-400">
                <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 max-w-sm mx-auto hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                  <div className="bg-black rounded-2xl p-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-green-400 animate-pulse">Monitoring</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Latency</span>
                        <span className="text-green-400 font-bold animate-pulse">-64.1%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="hover:scale-105 transition-transform">
                          <div className="text-2xl font-bold text-blue-400 animate-pulse">100K+</div>
                          <div className="text-xs text-gray-400">Nodes</div>
                        </div>
                        <div className="hover:scale-105 transition-transform">
                          <div className="text-2xl font-bold text-purple-400 animate-pulse">Sub-sec</div>
                          <div className="text-xs text-gray-400">Search</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-300">Trusted in production</h3>
          <p className="text-2xl font-bold mb-12 text-gray-300">by thousands of teams.</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold">Vercel</div>
            <div className="text-2xl font-bold">Supabase</div>
            <div className="text-2xl font-bold">Prisma</div>
            <div className="text-2xl font-bold">Retool</div>
          </div>
        </div>
      </section>

      {/* Instant Provisioning Section */}
      <section className="py-20 px-4 bg-gray-950 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Instant
              <br />
              Provisioning
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">No waiting. No config.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-lg border border-gray-800 overflow-hidden">
              <div className="bg-gray-900 px-4 py-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-green-400 text-sm">
                  {`$ pip install -i https://test.pypi.org/simple/ neurondb-vuongbachdoan==0.2.0
$ neurondbd -v
✓ NeuronDB server started on :4306
✓ Semantic embeddings loaded
✓ Ready for neural operations`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Neural database.
            <br />
            For semantic intelligence.
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Experience the future of neural database technology with semantic embeddings, spreading activation, and intelligent data retrieval.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Start for free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-gray-600 text-white hover:bg-gray-800 bg-transparent transition-all duration-300 hover:scale-105 hover:border-green-400 group"
              onClick={() => window.open("https://test.pypi.org/project/neurondb/", "_blank")}
            >
              View Documentation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-4">NeuronDB</h3>
          <p className="text-white/70 mb-6">Neural graph database with semantic embeddings and intelligent retrieval.</p>
          <div className="flex justify-center gap-6">
            <Badge variant="outline" className="border-white/20 text-white/70">
              MIT License
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white/70">
              Python 3.8+
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white/70">
              Cross-Platform
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  )
}
