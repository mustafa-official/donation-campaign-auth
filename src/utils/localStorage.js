import toast from 'react-hot-toast';

export const saveToLocalStorage = (data) => {

    const savedData = JSON.parse(localStorage.getItem('donation')) || [];
    const existData = savedData.find(item => item.id == data.id);
    if (!existData) {
        savedData.push(data);
        localStorage.setItem('donation', JSON.stringify(savedData));
        
        toast.success('Successfully Added!')
    } else {
        toast.error("Already Added")
    }

}


export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('donation')) || [];
    return data
}
