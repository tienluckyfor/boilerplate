import {useState} from 'react';
import {useRouter} from 'next/router';
import {Button} from "../../components";

export default function Posts({eventList}) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?category=sports')
        const data = await response.json()
        setEvents(data)
        router.push('/draff/posts?category=sports', undefined, {shallow: true})
    }

    return (
        <>
            <Button onClick={fetchSportsEvents} >Sports Events</Button>
            <h1>List of events</h1>
            {events.map(event => {
                return (
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p>{event.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}