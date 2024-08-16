import { spawnCommand } from "./spawn-command";

export const getContainerIP = async() =>  {
    try {
        const ipAddress = await spawnCommand('hostname', ['-i']);
        return ipAddress;
    } catch (error) {
        console.error('Error getting container IP:', error);
    }
}
  