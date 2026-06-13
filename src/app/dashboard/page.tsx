import Image from 'next/image';

export default function Page(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <div style={styles.rootContainer}>
            Dashboard
        </div>
    )
}

const styles = {
    rootContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}