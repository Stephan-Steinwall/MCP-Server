import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from 'zod'

const server = new McpServer({
    name: 'weather data fetcher',
    version: '1.0.0'
})