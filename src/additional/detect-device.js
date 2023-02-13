const detectDevice = () => {
    const resolution = window.innerWidth;
    let device = '';

    switch (true) {
        case resolution >= 320 && resolution < 728:
            device = 'mobile';
            break;
        case resolution >= 728 && resolution < 1024:
            device = 'tablet';
            break;
        default:
            device = 'desktop';
            break;
    }

    return device;
};

export default detectDevice;