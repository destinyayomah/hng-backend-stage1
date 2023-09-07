import { HttpException, HttpStatus } from "@nestjs/common";

const formatTIme = (isoString: String) => {
    const parts = isoString.split('.');

    if (parts.length === 2) {
        return parts[0] + 'Z';
    } else {
        return isoString;
    }
}

export const getCurrentUTCTime = async () => {
    try {
        // Fetch current time from a reliable time server
        const response = await fetch("https://worldtimeapi.org/api/ip");
        const data = await response.json();

        if (response.ok) {
            const serverTime: any = new Date(data.utc_datetime);
            const localTime: any = new Date();

            // Calculate the time difference between server and local time
            const timeDifference = serverTime - localTime;

            // Apply the time difference to the local time to get accurate UTC time
            const accurateUTCTime = new Date(localTime.getTime() + timeDifference);

            return formatTIme(accurateUTCTime.toISOString());
        } else {
            throw new HttpException('Unable to fetch time from the server.', HttpStatus.EXPECTATION_FAILED);
        }
    } catch (error) {
        console.error("Error fetching time:", error);
        // Fallback to less accurate method using Date
        return new Date().toISOString();
    }
}