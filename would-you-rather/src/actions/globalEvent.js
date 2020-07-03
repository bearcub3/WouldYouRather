export const LOG_OUT_GLOBAL_STATUS = 'LOG_OUT_GLOBAL_STATUS';

export function receiveGlobalEventStatus(logout) {
    return {
        type: LOG_OUT_GLOBAL_STATUS,
        logout,
    };
}
