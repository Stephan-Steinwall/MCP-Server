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
        const weatherData = await getWeatherByCity(city)
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(weatherData)
                }
            ]
        }
    }
)

async function getWeatherByCity(city: string) {
    if (city.toLowerCase() === 'new york') {
        return { temp: '22°C', forecast: 'Partly cloudy with a breeze' };
    }
    if (city.toLowerCase() === 'london') {
        return { temp: '16°C', forecast: 'Rainy and overcast' };
    }
    return { temp: null, error: 'Weather data not available for this city' };
}


server.resource(
    'weather://citites',
    'list of supported cities',
    'text/plain',

    async () => {
        return `supported Cities: New York, London`
    }
)