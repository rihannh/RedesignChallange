export default function ButtonGDSC({ fontSize = 'base', text = 'Join Us' }) {
    if (typeof fontSize !== 'string') {
        throw new Error('fontSize must be a string');
    }
    if (typeof text !== 'string') {
        throw new Error('text must be a string');
    }
    return (
        <button className={`text-${fontSize} bg-blue text-white px-5 py-2 rounded-lg hover:scale-90 hover:shadow-md hover:shadow-blue duration-300`}>{text}</button>
    )
}
