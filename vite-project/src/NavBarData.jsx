import React from "react";
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

// wl484: each block of element represent a icon with link to another webpage
export const SidebarData = [
    {
        title: 'Home',
        path: "/",
        icon: <AiIcons.AiFillHome />,
        Name: 'nav-text'
    },
    {
        title: 'Map with Crime History',
        path: "/map",
        icon: <GrIcons.GrMap />,
        Name: 'nav-text'
    },
    {
        title: 'Crime Search',
        path: "/Data",
        icon: <FaIcons.FaSearchLocation />,
        Name: 'nav-text'
    },
    {
        title: 'Reference Links',
        path: "/reference",
        icon: <BiIcons.BiLinkExternal/>,
        Name: 'nav-text'
    },
    {
        title: 'Contact Us!',
        path: "/contact",
        icon: <RiIcons.RiContactsLine />,
        Name: 'nav-text'
    },
]