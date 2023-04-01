import { useState } from "react";
import { Navigate } from "react-router-dom";


const About = () => {
    const [user, setUser] = useState<string | null>('mario')

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt nobis earum sit ipsum beatae qui minus dolores ad deleniti, ut id nulla perferendis molestias ipsam aut ab, dolore incidunt tempora. Illum doloremque atque optio exercitationem perspiciatis reiciendis, vel quas harum aut dolore obcaecati dolor rem ex quasi voluptates quibusdam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt nobis earum sit ipsum beatae qui minus dolores ad deleniti, ut id nulla perferendis molestias ipsam aut ab, dolore incidunt tempora. Illum doloremque atque optio exercitationem perspiciatis reiciendis, vel quas harum aut dolore obcaecati dolor rem ex quasi voluptates quibusdam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt nobis earum sit ipsum beatae qui minus dolores ad deleniti, ut id nulla perferendis molestias ipsam aut ab, dolore incidunt tempora. Illum doloremque atque optio exercitationem perspiciatis reiciendis, vel quas harum aut dolore obcaecati dolor rem ex quasi voluptates quibusdam.</p>

            <button onClick={() => setUser(null)}>Log Out</button>
        </div>
    );
};

export default About;