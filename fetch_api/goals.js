import { URL_ENDPOINT } from "../constants/API";
import axios from 'axios';

export async function getGoals(){
    try {
        const result = await axios.get(`${URL_ENDPOINT}/goals`);
        return result.data.goals
    } catch (error) {
        console.error(error);
    }
}

export async function createGoal(goal){
    try {
        const result = await axios.post(`${URL_ENDPOINT}/goals`, {
            goal: goal
        });
        return result.data
    } catch (error) {
        return {error: error}
    }
}

export async function deleteGoal(id){
    try {
        const result = await axios.delete(`${URL_ENDPOINT}/goals/${id}`);
        return result.data
    } catch (error) {
        console.log(error);
        return {error: error}
    }
}