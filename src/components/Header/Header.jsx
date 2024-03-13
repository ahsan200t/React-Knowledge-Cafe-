import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto p-4 border-b-2'>
            <h1 className='text-4xl font-bold font-title'>Knowledge Cafe</h1>
            <img src={profile} alt="" /> 
        </div>
    );
};

export default Header;