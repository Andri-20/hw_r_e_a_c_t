const Rocket = ({rocket}) => {
    return (
        <div>
            <h2>{rocket.mission_name} - {rocket.launch_year}</h2>
            <img src={rocket.links.mission_patch_small} alt="rocket_img"/>
        </div>
    )
}
export {Rocket}