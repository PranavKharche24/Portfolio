const logotext = "PK";
const meta = {
    title: "Pranav Kharche",
    description: "I’m Pranav Kharche, a Software Engineer passionate about IoT and full-stack development.",
};

const introdata = {
    title: "I’m Pranav Kharche",
    animated: {
        first: "I love building innovative solutions",
        second: "I bridge software with hardware",
        third: "I develop scalable web apps",
    },
    description: "Proactive software engineer with a strong foundation in embedded systems, networking, and full-stack development.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", // Replace with your actual image link if available
};

const dataabout = {
    title: "about myself",
    aboutme: "I’m a Computer Science undergraduate with hands-on experience in IoT, drone systems, Linux tools, and full-stack web development. I’m passionate about blending software with hardware to craft reliable, real-world solutions. I'm a quick learner, a team player, and an enthusiastic contributor in technical communities.",
};

const worktimeline = [
    {
        jobtitle: "Core Member - RNXG Robotics Club",
        where: "SGGSIET, Nanded",
        date: "2024 - Present",
    },
    {
        jobtitle: "Media Coordinator - RNXG Club",
        where: "SGGSIET, Nanded",
        date: "2024 - Present",
    },
];

const skills = [
    { name: "C/C++", value: 90 },
    { name: "Python", value: 85 },
    { name: "Golang", value: 85 },
    { name: "MySQL/SQLite", value: 75 },
    { name: "Flask / Gin / Node.js", value: 70 },
    { name: "Docker", value: 70 },
    { name: "ESP32 / Arduino", value: 80 },
    { name: "Wireshark / Wazuh", value: 65 },
    { name: "Git & GitHub", value: 90 },
];

const services = [
    {
        title: "Embedded System Development",
        description: "Expertise in real-time control systems, drone stabilization using PID, and ESP32-based IoT solutions.",
    },
    {
        title: "Full Stack Web Development",
        description: "Build responsive and data-driven web apps using Python, Go, Node.js, and Firebase.",
    },
    {
        title: "Linux & Network Tools",
        description: "Proficient with server config, Docker, Wireshark, and package managers for Linux systems.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/300", // Optional: Replace with project-related image
        description: "Drone stabilization using Arduino/ESP32 and MPU6050 with a custom PID controller.",
        link: "https://github.com/PranavKharche24/QuadCopter.git",
    },
    {
        img: "https://picsum.photos/400/301",
        description: "IoT-based soil monitoring system with live data visualization on Firebase.",
        link: "#", // Add actual hosted link if any
    },
    {
        img: "https://picsum.photos/400/302",
        description: "ECO: A smarter, peer-to-peer Linux package manager developed in Go.",
        link: "https://github.com/PranavKharche24/eco---A_Smarter_Package_Manager.git",
    },
    {
        img: "https://picsum.photos/400/302",
        description: "ECO: A smarter, peer-to-peer Linux package manager developed in Go.",
        link: "https://github.com/PranavKharche24/eco---A_Smarter_Package_Manager.git",
    },
];

const contactConfig = {
    YOUR_EMAIL: "2022bcs020@sggs.ac.in",
    YOUR_FONE: "+91-8421002018",
    description: "Open to internship opportunities and collaboration on IoT, full-stack, or embedded system projects.",
    YOUR_SERVICE_ID: "service_id", // Replace with actual EmailJS details if used
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/PranavKharche24",
    facebook: "#", // You can update if you want
    linkedin: "https://linkedin.com/in/pranavkharche",
    twitter: "#",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
