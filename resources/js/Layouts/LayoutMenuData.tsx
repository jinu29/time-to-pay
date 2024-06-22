import { Inertia } from "@inertiajs/inertia";
import React, { useEffect, useState } from "react";
import { usePage } from '@inertiajs/react';
import { isVisible } from "./utils";

const Navdata = () => {
    const user = usePage().props.auth.user;
    const userRole = user?.role;
    // console.log(userRole)
    console.log("user", user?.role)


    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isApps, setIsApps] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [isBaseUi, setIsBaseUi] = useState<boolean>(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState<boolean>(false);
    const [isForms, setIsForms] = useState<boolean>(false);
    const [isTables, setIsTables] = useState<boolean>(false);
    const [isCharts, setIsCharts] = useState<boolean>(false);
    const [isIcons, setIsIcons] = useState<boolean>(false);
    const [isMaps, setIsMaps] = useState<boolean>(false);
    const [isMultiLevel, setIsMultiLevel] = useState<boolean>(false);

    // Apps
    const [isCalendar, setCalendar] = useState<boolean>(false);
    const [isEmail, setEmail] = useState<boolean>(false);
    const [isSubEmail, setSubEmail] = useState<boolean>(false);
    const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
    const [isProjects, setIsProjects] = useState<boolean>(false);
    const [isTasks, setIsTasks] = useState<boolean>(false);
    const [isCRM, setIsCRM] = useState<boolean>(false);
    const [isCrypto, setIsCrypto] = useState<boolean>(false);
    const [isInvoices, setIsInvoices] = useState<boolean>(false);
    const [isSupportTickets, setIsSupportTickets] = useState<boolean>(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState<boolean>(false);
    const [isJobs, setIsJobs] = useState<boolean>(false);
    const [isJobList, setIsJobList] = useState<boolean>(false);
    const [isCandidateList, setIsCandidateList] = useState<boolean>(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState<boolean>(false);
    const [isLockScreen, setIsLockScreen] = useState<boolean>(false);
    const [isLogout, setIsLogout] = useState<boolean>(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isVerification, setIsVerification] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    // Pages
    const [isProfile, setIsProfile] = useState<boolean>(false);
    const [isLanding, setIsLanding] = useState<boolean>(false);


    // Charts
    const [isApex, setIsApex] = useState<boolean>(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState<boolean>(false);
    const [isLevel2, setIsLevel2] = useState<boolean>(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e : any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul : any = document.getElementById("two-column-menu");
            const iconItems : any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("sub-items");
                const getID : any = document.getElementById(id) as HTMLElement;
                if (getID)
                    getID?.parentElement.classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel,

    ]);

    const isVisible = (role: string | undefined, allowedRoles: string[]) => {
        if (!role) {
            console.log("hii")
            return false;
        }
        return allowedRoles.includes(role);
    };



    const menuItems : any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "ri-dashboard-2-line",
            link: "/dashboard",
            stateVariables: isDashboard,
            // isVisible: userRole === 'distributor',
            isVisible: isVisible(userRole, ['admin', 'distributor']),
            click: function (e : any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
        },

        {
            id: "apps",
            label: "Frontend Settings",
            icon: "ri-apps-2-line",
            link: "/#",
            click: function (e : any) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState('Apps');
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            isVisible: isVisible(userRole, [ 'distributor']),
        },
        {
            label: "User Management",
            isHeader: true,
        },

        {
            id: "user_management",
            label: "User",
            icon: "ri-account-circle-line",
            link: "/user_management/user",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
        {
            id: "UserKYCTracking",
            label: "KYC ",
            icon: "ri-account-circle-line",
            link: "/user_management/KYC",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
        {
            id: "UserPayment",
            label: "Payment Report",
            icon: "ri-account-circle-line",
            link: "/user_management/payment_report",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
        {
            label: "Payment",
            isHeader: true,
        },
        {
            id: "Create_Payment",
            label: "Create Payment",
            icon: "ri-account-circle-line",
            link: "/setting/generate-PaymentLink",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },

        {
            label: "Distributor Management",
            isHeader: true,
        },

        {
            id: "DistributorList",
            label: "Distributor List",
            icon: "ri-account-circle-line",
            link: "/distributor_management/distributor",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },

        {
            label: "Settings and Conf",
            isHeader: true,
        },

        {
            id: "eko",
            label: "EKO Configuration",
            icon: "ri-account-circle-line",
            link: "/eko",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
        {
                id: "otpconf",
                label: "OTP Configuration",
                icon: "ri-lock-password-line",
                link: "/#",
                click: function (e : any) {
                    e.preventDefault();
                    setIsPages(!isPages);
                    setIscurrentState('Pages');
                    updateIconSidebar(e);
                },
                stateVariables: isPages,
                subItems: [
                    {
                        id: "Email_conf",
                        label: "Email Configuration",
                        link: "/setting/email-conf",
                        parentId: "pages",
                    },
                    {
                        id: "Mobile_conf",
                        label: "Mobile Configuration",
                        link: "/setting/mobile-conf",
                        parentId: "pages",
                    }
                ]
            },
        {
            id: "bussinesssettings",
            label: "Bussiness Settings",
            icon: "ri-settings-3-line",
            link: "/business-settings",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
        {
            id: "paymentconf",
            label: "Payment Configuration",
            icon: "ri-settings-3-line",
            link: "/setting/payment_conf",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
    ];

    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
