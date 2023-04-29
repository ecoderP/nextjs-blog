import { parseISO, format } from 'date-fns';


export default function DATE({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLL d, yyy')}</time>
}