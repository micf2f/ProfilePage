import { createSlice } from '@reduxjs/toolkit';


export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        avatar: localStorage.getItem("avatar") || null, 
        profileData: JSON.parse(localStorage.getItem("profileData")) || {
            name: "",
            lastname: "",
            job: "",
            phone: "",
            email: "",
            address: "",
            pitch: ""
        },
        originalData: {},
        profileOption: localStorage.getItem("profileOption") || 'private',
        interests: JSON.parse(localStorage.getItem('interests')) || [],
        links: JSON.parse(localStorage.getItem('links')) || []
    },
    reducers: {
        updateProfile: (state, action) => {
            state.profileData = action.payload;
        },
        resetProfile: (state) => {
            state.profileData = JSON.parse(localStorage.getItem("profileData")) || {
                name: "",
                lastname: "",
                job: "",
                phone: "",
                email: "",
                address: "",
                pitch: "",
            };
        },
        updateProfileOption: (state, action) => {
            state.profileOption = action.payload;
        },
        resetProfileOption: (state) => {
            state.profileOption = localStorage.getItem("profileOption") || 'private';
        },
        addInterest(state, action) {
            state.interests.push(action.payload);
        },
        removeInterest(state, action) {
            state.interests = state.interests.filter((interest) => interest !== action.payload)
        },
        setAvatar(state, action) {
            state.avatar = action.payload;
            localStorage.setItem("avatar", action.payload);
        },
        removeAvatar(state) {
            state.avatar = null;
            localStorage.removeItem("avatar");
        },
        addLink(state, action) {
            state.links.push(action.payload);
            localStorage.setItem('links', JSON.stringify(state.links));
        },
        removeLink(state, action) {
            state.links = state.links.filter(link => link.id !== action.payload);
            localStorage.setItem('links', JSON.stringify(state.links));
        }
    }
})


export const { 

    updateProfile, 
    resetProfile, 
    updateProfileOption, 
    resetProfileOption,
    addInterest,
    removeInterest,
    setAvatar,
    removeAvatar,
    addLink,
    removeLink

} = profileSlice.actions

export default profileSlice.reducer