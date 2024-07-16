import DateTimeSlot from "../models/DateTimeSlot";

const BASE_URL = 'http://localhost:8080';
const BROADCAST_URL = BASE_URL + '/api/broadcasts';

class BroadcastService {

    static async getTimeSlots(movieId: number) : Promise<DateTimeSlot> {

        try {
            const response = await fetch(BROADCAST_URL + `/movie/${movieId}`);
            if (!response.ok) {
                console.error(response.statusText);
                return Promise.reject(response.statusText);
            }

            const responseJson = await response.json();
            console.log(responseJson);
            console.log(responseJson["2024-07-15"]);

            return responseJson;
        } catch (error) {
            console.error('Error fetching broadcasts:', error);
            throw error; // You might want to handle this error more gracefully
        }

    }
}

export default BroadcastService;