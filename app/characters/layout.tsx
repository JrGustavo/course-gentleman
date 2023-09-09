import './character-containers.css';
function Cardlayout({children}: {children: React.ReactNode}) {
    return <div className="character-Layout">{children}</div>;

}

export default Cardlayout;