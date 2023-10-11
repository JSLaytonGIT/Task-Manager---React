export const modalstyle = {
    position: 'absolute',
    top: '46%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 414,
    bgcolor: 'background.paper',
    border: '1px solid #ef4100',
    boxShadow: '0 0 30px #ef4100',
    p: 4,
    paddingTop: '18px',
    backgroundColor: '#232323',
    borderRadius: '10px',
};

export const buttonBox = {
    display:"flex",
    gap: 1,
    top: '10px',
    backgroundColor: '#00aeef',
    '&:hover': {
        borderColor: '#fff',
    },
    '&.MuiButton-root:hover': {
        borderColor: '#fff',
    },
};

export const closeButton = {
    position: 'absolute',
    top: 0,
    right: 0,
}

export const outerButtonBox = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
}

export const title = {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: '2px',
    color: 'white',
    fontWeight: 'bold',
}