import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, FAMILIES, WEIGHTS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <DesktopMainHeader>
                        <Logo />
                    </DesktopMainHeader>
                    <ActionGroup>
                        <UserButton>
                            <User size={24} />
                        </UserButton>
                        <DesktopSubscribeGroup>
                            <SubscribeButton>Subscribe</SubscribeButton>
                            <SubscribeLink>Already a subscriber?</SubscribeLink>
                        </DesktopSubscribeGroup>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MobileMainHeader>
                <Logo />
            </MobileMainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.desktopAndUp} {
        background-color: var(--color-gray-100);
        color: var(--gray-100);
        padding: 0;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;

    @media ${QUERIES.desktopAndUp} {
        align-items: baseline;
    }
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const UserButton = styled.button`
    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const DesktopSubscribeGroup = styled.div`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`;

const SubscribeButton = styled.button`
    font-family: ${FAMILIES.sansSerif};
    font-size: 16px;
    font-weight: ${WEIGHTS.bold};
    background-color: var(--color-primary);
    border-radius: 4px;
    color: var(--color-white);
    padding: 11px 24px;
    text-transform: uppercase;
`;

const SubscribeLink = styled.a`
    font-style: italic;
    text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
`;

const MobileMainHeader = styled(MainHeader)`
    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const DesktopMainHeader = styled(MainHeader)`
    display: none;

    @media ${QUERIES.desktopAndUp} {
        display: revert;
        margin-top: 16px;
    }
`;

export default Header;
