import { memo, useEffect, useState } from "react";
import { ConfigurationCard } from "../../../Global/ConfigurationCard/ConfigurationCard"
import { UpdateUsernameModal } from "../../Modals/UpdateUsername/UpdateUsernameModal"
import { ConfigurationSubPageContainer } from "./styles"
import { disableAccount, enableAccount, getMe, suspendAccount, updateEmail, updatePassword, updateUsername } from "../../../../services/user";
import { UpdateEmailModal } from "../../Modals/UpdateEmail/UpdateEmailModal";
import { ShowInformationModal } from "../../Modals/ShowInformation/ShowInformationModal";
import { UpdatePasswordModal } from "../../Modals/UpdatePassword/UpdatePasswordModal";
import { DisableAccountModal } from "../../Modals/DisableAccount/DisableAccountModal";
import { EnableAccountModal } from "../../Modals/EnableAccount/EnableAccountModal";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../redux/slices/auth";
import { AxiosError } from "axios";
import { showPopupAdvice } from "../../../../redux/slices/popup";

export const ConfigurationSubPage = () => {
  const [me, setMe] = useState(null);
  const [showUpdateUsername, setShowUpdateUsername] = useState(false);
  const [showUpdateEmail, setShowUpdateEmail] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);
  const [showSuspendAccount, setShowSuspendAccount] = useState(false);
  const [showEnableAccount, setShowEnableAccount] = useState(false);
  const [loadingUsername, setLoadingUsername] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingInformation, setLoadingInformation] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [loadingAccount, setLoadingAccount] = useState(false);
  const dispatch = useDispatch();

  const handleShowUpdateUsername = () => setShowUpdateUsername(!showUpdateUsername);
  const handleShowUpdateEmail = () => setShowUpdateEmail(!showUpdateEmail);
  const handleShowInformation = () => setShowInformation(!showInformation);
  const handleShowUpdatePassword = () => setShowUpdatePassword(!showUpdatePassword);
  const handleShowSuspendAccount = () => setShowSuspendAccount(!showSuspendAccount);
  const handleShowEnableAccount = () => setShowEnableAccount(!showEnableAccount);

  const handleSubmitUpdateUsername = async (data) => {
    setLoadingUsername(true);
    const results = await updateUsername(data);
    
    if(results && !(results instanceof AxiosError)){
      dispatch(setUser(results.data));
      handleShowUpdateUsername();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };

    setLoadingUsername(false);
  };

  const handleSubmitUpdateEmail = async (data) => {
    setLoadingEmail(true);
    const results = await updateEmail(data);

    if(results && !(results instanceof AxiosError)){
      fetchGetMe();
      handleShowUpdateEmail();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };

    setLoadingEmail(false);
  };

  const handleSubmitUpdatePassword = async (password) => {
    setLoadingPassword(true);
    const results = await updatePassword(password);

    if(results && !(results instanceof AxiosError)){
      handleShowUpdatePassword();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };

    setLoadingPassword(false);
  };

  const handleSubmitDisableAccount = async () => {
    setLoadingAccount(true);
    const results = await disableAccount();
    if(results && !(results instanceof AxiosError)){
      handleShowSuspendAccount();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };
    setLoadingAccount(false);
  };

  const handleSubmitEnableAccount = async () => {
    setLoadingAccount(true);
    const results = await enableAccount();
    if(results && !(results instanceof AxiosError)){
      handleShowEnableAccount();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };
    setLoadingAccount(false);
  };

  const fetchGetMe = async () => {
    setLoadingInformation(true);
    const results = await getMe();

    if(results && !(results instanceof AxiosError)){
      setMe(results.data);
    };

    setLoadingInformation(false);
  };

  useEffect(() => {
    fetchGetMe();
  }, []);

  return (<>
    <UpdateUsernameModal isOpen={showUpdateUsername} handleModal={handleShowUpdateUsername} handleSubmit={handleSubmitUpdateUsername} loading={loadingUsername}/>
    <UpdateEmailModal isOpen={showUpdateEmail} handleModal={handleShowUpdateEmail} handleSubmit={handleSubmitUpdateEmail} loading={loadingEmail}/>
    <UpdatePasswordModal isOpen={showUpdatePassword} handleModal={handleShowUpdatePassword} handleSubmit={handleSubmitUpdatePassword} loading={loadingPassword}/>
    <DisableAccountModal isOpen={showSuspendAccount} handleModal={handleShowSuspendAccount} handleSubmit={handleSubmitDisableAccount} loading={loadingAccount}/>
    <EnableAccountModal isOpen={showEnableAccount} handleModal={handleShowEnableAccount} handleSubmit={handleSubmitEnableAccount} loading={loadingAccount}/>
    <ShowInformationModal isOpen={showInformation} handleModal={handleShowInformation} information={me} loading={loadingInformation}/>
    <ConfigurationSubPageContainer>
      <ConfigurationCard title='Update username' textButton='Update' handleButton={handleShowUpdateUsername}/>
      <ConfigurationCard title='Update email' textButton='Update' handleButton={handleShowUpdateEmail}/>
      <ConfigurationCard title='Update Password' textButton='Update' handleButton={handleShowUpdatePassword}/>
      <ConfigurationCard title='View information' textButton='View' handleButton={handleShowInformation}/>
      {me?.status === 'disabled' ? 
      <ConfigurationCard title='Enable Account' textButton='Enable' handleButton={handleShowEnableAccount} status={me?.status}/> 
      : 
      <ConfigurationCard title='Disable Account' textButton='Disable' handleButton={handleShowSuspendAccount} status={me?.status}/>}
    </ConfigurationSubPageContainer>
  </>
  )
};