export default function Video () {
    return (
        <div className="w-full overflow-hidden">
            <video autoPlay muted loop id="myVideo" className="w-screen">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
        </div>
    )
}