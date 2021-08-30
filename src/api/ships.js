import axios from 'axios';
import _ from 'lodash';

async function getPilotsService(url) {
  try {
    const resp = await axios.get(url);
    return resp;
  } catch (error) {
      throw error;
  }
}


async function getPilots(arrayUrl) {
    let arrayPilots = [];
    arrayUrl.forEach( async (url) => {
        let resp  = await getPilotsService(url);
        const { data, status } = resp;
        if (status === 200) {
            arrayPilots.push(data.name);
        }
    })
    return arrayPilots;
} 

async function getShipsService() {
    try {
        const {data, status} = await axios.get(`https://swapi.dev/api/starships`);
        if (status !== 200) {
          throw status;
        }
        const { results } = data;
        const promises = results.map(async (item) => {
            try {
                const { pilots } = item;
                if (!_.isEmpty(pilots)) {
                    let arrayPilots  = await getPilots(pilots);
                    item.people  = arrayPilots;
                }    
                return item;
            } catch (error) {
                throw error;
            }
        });
        const fullResults = await Promise.all(promises);
        return fullResults;
    } catch (error) {
        return error;
    }
};


export const Ships = {
  getShipsService,
};