function storageAvailable(type)
{
    try
    {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
    }
    catch(e)
    {
        return e instanceof DOMException && (
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            storage.length !==0;
        
    }
}

function storageCheck()
{
    if(storageAvailable('localStorage'))
    {
        alert('Local Storage available');
    } else {
        alert('Local Storage not available.')
    }
}