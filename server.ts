import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from 'zod'

const server = new McpServer({
    name: 'weather data fetcher',
    version: '1.0.0'
})

server.tool(
    'getCurrentWeather',
    'Get the weather of a given city',
    {
        city: z.string().describe('The city to get the weather for')
    },
    async ({ city }) => {
        return {
            content: [
                {
                    type: 'text',
                    text: `The weather in ${city} is sunny`
                }
            ]
        }
    }
)