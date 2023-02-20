export const ButtonTheme = {
    variants: {
        topMenu: {
            fontWeight: 'normal',
            fontSize: '14px',
            h: 'fit-content',
            p: '4px 5px',
            cursor: 'pointer',
            borderRadius: '5px',
            _hover: {
                background: '#1F2B39',
            }

        },
        sideMenu: {
            w: '100%',
            p: "25px 10px",
            borderLeft: '2px',
            borderRadius: '0    ',
            _hover: {
                background: '#1F2B39',

            }
        },
        fileTabs: {
            background: '#01111e00',
            p: '5px 30px 5px 18px',
            cursor: 'pointer',
            fontWeight: 'normal',
            color: '#7580AD',
            borderRight: '2px',
            borderRadius: '1px',
            borderColor: '#3B4B69',
            h: 'fit-content',
            fontSize: '14px',

        }
    }
}
