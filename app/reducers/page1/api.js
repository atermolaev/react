import axios from 'axios';

export const getMoneyCource = axios.get('https://www.cbr-xml-daily.ru/daily_json.js');