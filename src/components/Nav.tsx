const Nav = () => {
    return (
        // left side navigation bar
        <nav className={'absolute h-screen w-1/6 bg-gray-100'}>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <div className={'w-full h-1/2 bg-gray-200 rounded-full'}>
                    <img src={'profile.png'} alt={'profile image'}/>
                </div>
                <div className={'text-xl font-bold'}>DongHwan Park</div>
                <div>
                    <p>
                        i'm uncommon web developer
                    </p>
                    <p>
                        interested in fast, easy, usable development
                    </p>
                </div>
                <div>
                    //github
                    //linkedin
                </div>
            </div>
            <div className={'flex flex-col justify-center items-center'}>
                <div className="category-wrap w-full">
                    <ul className="tree-view">
                        {/*<a href="/board" style="font-size:20px;" className="">*/}
                        {/*    Categories*/}
                        {/*</a>*/}
                        <li>
                            <ul>
                                <li><a href="/board/undefined" className="">

                                </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
