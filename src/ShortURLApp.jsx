import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import Button from "./components/ui/button";
import Input from "./components/ui/input";
import { Loader2, Copy, Check } from "./components/icons";

export default function ShortURLApp() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    if (!url.trim()) return "URL cannot be empty";
    try {
      new URL(url);
      return "";
    } catch {
      return "Invalid URL format";
    }
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setError("");
    setLoading(true);
    setCopied(false);
    setSuccess(null);

    try {
      // Uses CRA proxy in development (frontend/package.json proxy)
      const res = await fetch("/url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();

      const backendURL = "http://localhost:8001";
      setSuccess(`${backendURL}/${data.id}`);
    } catch (e) {
      setError("Failed to generate short URL. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!success) return;
    navigator.clipboard.writeText(success);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="app-container">
      <header className="text-3xl font-semibold text-gray-800">
        ShortURL Generator
      </header>

      <Card className="w-full max-w-xl shadow-lg rounded-2xl">
        <CardContent className="p-6 flex flex-col gap-4">
          <label className="text-gray-700 font-medium">Enter a long URL:</label>
          <Input
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="rounded-xl"
          />

          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}

          <Button
            className="rounded-xl h-11"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5" /> Generating...
              </div>
            ) : (
              "Shorten URL"
            )}
          </Button>

          {success && (
            <div className="bg-green-50 border border-green-200 p-4 rounded-xl mt-4 flex items-center justify-between">
              <span className="truncate max-w-[70%] text-green-700 font-medium">
                {success}
              </span>
              <Button size="sm" className="rounded-lg" onClick={handleCopy}>
                {copied ? <Check className="w-4" /> : <Copy className="w-4" />}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Generated Links History
          </h2>

          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100 text-gray-700">
                <th className="p-3">Short URL</th>
                <th className="p-3">Original URL</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-blue-600 truncate max-w-[120px]">
                  example.com/xYz12
                </td>
                <td className="p-3 truncate max-w-[300px]">
                  https://very-long-url-example.com/sample/test/path
                </td>
                <td className="p-3">
                  <Button size="sm" className="rounded-lg">
                    Copy
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <footer className="text-gray-600 text-sm mt-10">
        © {new Date().getFullYear()} ShortURL — All rights reserved.
      </footer>
    </div>
  );
}
