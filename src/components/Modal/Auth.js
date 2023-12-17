import 'components/Modal/Auth.scss';
import Autosave from 'components/Autosave.js';
import Modal from 'components/Modal.js';

export default class Auth extends Modal {
  constructor(data, options = {}) {
    options.content = `
      <DIV class="notice"></DIV>
      <DIV class="auth" style="display:none">
        <UL>
          <LI class="discord box">
            <BUTTON class="styled">
              <svg width="124" height="34" viewBox="0 0 124 34" class="button">
                <g fill="currentColor">
                  <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
                  <path d="M41.2697 9.86615H47.8585C49.4394 9.86615 50.7878 10.1141 51.8883 10.6101C52.9887 11.1061 53.8102 11.7881 54.3527 12.6715C54.8951 13.555 55.1741 14.5624 55.1741 15.7094C55.1741 16.8253 54.8952 17.8328 54.3217 18.7472C53.7482 19.6462 52.8803 20.3746 51.7178 20.9016C50.5554 21.4286 49.1139 21.6921 47.3935 21.6921H41.2697V9.86615ZM47.316 18.6852C48.3854 18.6852 49.2069 18.4217 49.7804 17.8793C50.3539 17.3523 50.6484 16.6083 50.6484 15.6939C50.6484 14.8414 50.3849 14.1594 49.8734 13.648C49.3619 13.1365 48.587 12.873 47.5485 12.873H45.4871V18.6852H47.316Z"></path>
                  <path d="M65.4362 21.6774C64.5217 21.4449 63.7003 21.1039 62.9718 20.6389V17.8335C63.5298 18.2675 64.2582 18.6085 65.1882 18.8875C66.1181 19.1665 67.0171 19.306 67.8851 19.306C68.288 19.306 68.598 19.2595 68.7995 19.151C69.001 19.0425 69.1095 18.9185 69.1095 18.7635C69.1095 18.593 69.0475 18.4535 68.939 18.345C68.8305 18.2365 68.6135 18.1435 68.288 18.0505L66.2576 17.6011C65.0952 17.3376 64.2737 16.9501 63.7777 16.4851C63.2818 16.0201 63.0493 15.3847 63.0493 14.6097C63.0493 13.9587 63.2663 13.3853 63.6847 12.9048C64.1187 12.4243 64.7232 12.0523 65.5137 11.7888C66.3041 11.5254 67.2186 11.3859 68.288 11.3859C69.2335 11.3859 70.1014 11.4789 70.8919 11.6959C71.6823 11.8973 72.3333 12.1608 72.8448 12.4708V15.1212C72.3178 14.8112 71.6979 14.5632 71.0159 14.3772C70.3184 14.1912 69.6055 14.0982 68.877 14.0982C67.823 14.0982 67.2961 14.2842 67.2961 14.6407C67.2961 14.8112 67.3736 14.9352 67.5441 15.0282C67.7146 15.1212 68.009 15.1987 68.443 15.2917L70.1324 15.6017C71.2329 15.7876 72.0543 16.1286 72.5968 16.6091C73.1393 17.0896 73.4028 17.787 73.4028 18.7325C73.4028 19.7555 72.9533 20.5769 72.0543 21.1659C71.1554 21.7704 69.8844 22.0648 68.2415 22.0648C67.2806 22.0338 66.3506 21.9098 65.4362 21.6774Z"></path>
                  <path d="M77.5891 21.3213C76.6281 20.8408 75.8842 20.2054 75.4037 19.3994C74.9077 18.5934 74.6752 17.679 74.6752 16.656C74.6752 15.6486 74.9232 14.7341 75.4347 13.9437C75.9462 13.1377 76.6901 12.5177 77.6666 12.0528C78.643 11.6033 79.821 11.3708 81.1849 11.3708C82.8743 11.3708 84.2693 11.7273 85.3852 12.4402V15.5246C84.9977 15.2611 84.5328 15.0286 84.0058 14.8736C83.4788 14.7031 82.9208 14.6256 82.3319 14.6256C81.2779 14.6256 80.472 14.8116 79.8675 15.1991C79.2785 15.5866 78.984 16.0826 78.984 16.7025C78.984 17.307 79.263 17.803 79.852 18.1905C80.4254 18.5779 81.2624 18.7794 82.3474 18.7794C82.9053 18.7794 83.4633 18.7019 84.0058 18.5314C84.5483 18.3609 85.0287 18.175 85.4162 17.927V20.9183C84.1762 21.6623 82.7348 22.0343 81.1074 22.0343C79.728 22.0343 78.5655 21.7863 77.5891 21.3213Z"></path>
                  <path d="M89.8041 21.3213C88.8276 20.8408 88.0837 20.2054 87.5722 19.3839C87.0607 18.5624 86.7972 17.648 86.7972 16.625C86.7972 15.6176 87.0607 14.7031 87.5722 13.9127C88.0837 13.1222 88.8276 12.5022 89.7886 12.0528C90.7495 11.6033 91.9119 11.3708 93.2464 11.3708C94.5794 11.3708 95.7418 11.5878 96.7028 12.0528C97.6637 12.5022 98.4077 13.1222 98.9192 13.9127C99.4306 14.7031 99.6786 15.6021 99.6786 16.625C99.6786 17.6325 99.4306 18.5624 98.9192 19.3839C98.4077 20.2054 97.6792 20.8563 96.7028 21.3213C95.7263 21.7863 94.5794 22.0343 93.2464 22.0343C91.9274 22.0343 90.7805 21.7863 89.8041 21.3213ZM94.9358 18.3299C95.3388 17.927 95.5558 17.369 95.5558 16.7025C95.5558 16.0206 95.3543 15.4936 94.9358 15.0906C94.5174 14.6876 93.9594 14.4861 93.2619 14.4861C92.5335 14.4861 91.9739 14.6876 91.5555 15.0906C91.1525 15.4936 90.9355 16.0206 90.9355 16.7025C90.9355 17.3845 91.137 17.927 91.5555 18.3299C91.9739 18.7484 92.5335 18.9499 93.2619 18.9499C93.9594 18.9344 94.5329 18.7329 94.9358 18.3299Z"></path>
                  <path d="M110.048 11.9901V15.6325C109.614 15.3535 109.056 15.214 108.374 15.214C107.475 15.214 106.777 15.493 106.297 16.0354C105.816 16.5779 105.568 17.4304 105.568 18.5773V21.6772H101.43V11.8196H105.491V14.966C105.708 13.819 106.08 12.9666 106.576 12.4241C107.072 11.8816 107.723 11.5872 108.513 11.5872C109.102 11.5872 109.614 11.7267 110.048 11.9901Z"></path>
                  <path d="M124 9.52563V21.6925H119.862V19.4761C119.505 20.3131 118.978 20.9486 118.265 21.3825C117.551 21.8165 116.667 22.0335 115.613 22.0335C114.683 22.0335 113.862 21.801 113.164 21.3515C112.467 20.9021 111.925 20.2666 111.553 19.4761C111.181 18.6702 110.995 17.7712 110.995 16.7793C110.979 15.7408 111.181 14.8109 111.599 13.9894C112.002 13.168 112.591 12.5325 113.335 12.0675C114.079 11.6025 114.931 11.37 115.892 11.37C117.861 11.37 119.18 12.2225 119.862 13.9429V9.52563H124ZM119.242 18.2517C119.66 17.8487 119.877 17.3062 119.877 16.6553C119.877 16.0198 119.676 15.5083 119.257 15.1209C118.839 14.7334 118.281 14.5319 117.582 14.5319C116.884 14.5319 116.326 14.7334 115.908 15.1364C115.489 15.5393 115.288 16.0508 115.288 16.7018C115.288 17.3527 115.489 17.8642 115.908 18.2672C116.326 18.6702 116.869 18.8717 117.566 18.8717C118.265 18.8717 118.823 18.6702 119.242 18.2517Z"></path>
                  <path d="M58.9885 12.4091C60.1772 12.4091 61.1429 11.5416 61.1429 10.4717C61.1429 9.40164 60.1772 8.5343 58.9885 8.5343C57.7981 8.5343 56.8341 9.40164 56.8341 10.4717C56.8341 11.5416 57.7981 12.4091 58.9885 12.4091Z"></path>
                  <path d="M61.1429 13.741C59.8254 14.3144 58.1825 14.3299 56.8341 13.741V21.6921H61.1429V13.741Z"></path>
                </g>
              </svg>
            </BUTTON>
          </LI>
          <LI class="facebook box">
            <BUTTON class="styled">
              <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="-150 -48.38625 1300 290.3175">
                <path d="M63.35 190.562H25.669V96.628H0V66.045h25.668V44.283C25.668 18.495 37.021 0 74.6 0c7.948 0 20.426 1.602 20.426 1.602V30H81.92c-13.354 0-18.568 4.062-18.568 15.292v20.753h31.174L91.75 96.628H63.351zm86.46-126.961c-.549 0-1.114.02-1.673.034-34.94 0-50.926 26.282-50.926 63.59 0 46.998 20.736 65.808 51.199 65.808 17.429 0 28.88-7.336 35.84-21.026v18.568h35.84V66.058h-35.84v19.149c-5.683-12.32-17.454-21.46-34.44-21.606zm9.113 29.423c14.675 0 23.483 10.236 23.483 27.647l.034 17.783c0 11.735-7.275 25.464-23.517 25.464-24.97 0-24.303-26.962-24.303-35.942 0-30.207 13.304-34.952 24.303-34.952zm75.641 35.299c0-15.131-.724-64.641 63.78-64.641 25.893 0 36.705 8.233 36.705 8.233l-8.69 26.953s-10.798-5.946-24.868-5.946c-18.021 0-29.52 10.447-29.52 28.828l.02 13.18c0 17.662 11.095 29.452 29.537 29.452 12.818 0 24.632-6.002 24.632-6.002l8.668 26.39s-9.886 8.285-36.303 8.285c-61.418 0-63.96-44.42-63.96-64.732zm310.628-64.688c34.941 0 51.179 26.282 51.179 63.59 0 46.998-20.737 65.808-51.2 65.808-17.429 0-30.313-7.335-37.273-21.026v18.568l-35.389-.014V3.786L510.083.509V83.52c5.423-14.523 23.245-19.885 35.11-19.885zm-10.534 29.389c-14.675 0-24.575 10.236-24.575 27.647l-.035 17.783c-.022 11.735 6.856 25.464 24.61 25.464 24.97 0 24.303-26.962 24.303-35.942 0-30.207-13.303-34.952-24.303-34.952zM400.243 63.738c-39.63 0-60.552 21.607-60.552 60.005v7.134c0 49.837 29.381 62.668 64.409 62.668 34.047 0 49.458-9.523 49.458-9.523l-7.031-25.36s-18.128 7.713-37.922 7.713c-20.52 0-29.345-5.23-31.607-24.95h79.564V121.08c0-41.652-23.481-57.343-56.32-57.343zm.955 25.394c13.718 0 22.607 8.412 22.119 27.921h-46.25c.802-20.533 10.388-27.92 24.131-27.92zm270.094-25.565c-40.697 0-62.122 22.934-62.122 64.033 0 56.39 36.932 65.467 62.19 65.467 36.976 0 61.576-19.907 61.576-64.955 0-46.887-27.66-64.545-61.644-64.545zm-.512 29.559c17.895 0 24.986 13.393 24.986 28.638v13.107c0 18.468-9.922 29.15-25.054 29.15-14.152 0-24.098-9.992-24.098-29.15v-13.107c0-20.432 11.835-28.638 24.166-28.638zm137.01-29.559c-40.697 0-62.122 22.934-62.122 64.033 0 56.39 36.932 65.467 62.19 65.467 36.975 0 61.576-19.907 61.576-64.955 0-46.887-27.661-64.545-61.644-64.545zm-.512 29.559c17.895 0 24.985 13.393 24.985 28.638v13.107c0 18.468-9.922 29.15-25.053 29.15-14.152 0-24.098-9.992-24.098-29.15v-13.107c0-20.432 11.835-28.638 24.166-28.638zm76.355 97.436V3.786L921.316.51v125.189l37.386-59.653h39.796l-39 61.783L1000 190.562h-39.909l-38.775-60.914v60.914z" fill="currentColor"/>
              </svg>
            </BUTTON>
          </LI>
          <LI class="skipAuth"><BUTTON class="link">Maybe Later</BUTTON></LI>
        </UL>
      </DIV>
      <DIV class="identify" style="display:none"></DIV>
    `;

    data.authIsInit = false;
    data.identifyIsInit = false;

    super(options, data);

    Object.assign(this._els, {
      notice: this.root.querySelector('.notice'),
      auth: this.root.querySelector('.auth'),
      identify: this.root.querySelector('.identify'),
    });
    this.root.classList.add('auth');
  }

  get notice() {
    return this.data.notice;
  }
  set notice(notice) {
    this.data.notice = notice;
    this._els.notice.innerHTML = notice ?? '';
  }

  showAuth() {
    if (!this.data.config)
      return this.showIdentify();
    this.renderAuth();
    return this.show();
  }
  showIdentify() {
    this.renderIdentify();
    return this.show(() => this._els.autosave.focus());
  }

  initAuth() {
    const authClient = Tactics.authClient;
    const divAuth = this._els.auth;

    divAuth.querySelector('UL').addEventListener('click', event => {
      const li = event.target.closest('LI');
      if (!li)
        return;

      if (li.classList.contains('discord'))
        authClient.openAuthProvider('discord');
      else if (li.classList.contains('facebook'))
        authClient.openAuthProvider('facebook');
      else if (li.classList.contains('skipAuth'))
        this.showIdentify();
    });

    this.data.authIsInit = true;
  }
  renderAuth() {
    const config = this.data.config;
    const divNotice = this._els.notice;
    const divAuth = this._els.auth;
    const divIdentify = this._els.identify;

    divAuth.querySelector('.discord').style.display = config.discord ? '' : 'none';
    divAuth.querySelector('.facebook').style.display = config.facebook ? '' : 'none';

    divNotice.innerHTML = this.data.notice ?? [
      'Login with Discord (preferred) or Facebook.',
      'This way you won\'t accidentally lose your account.',
    ].map(s => s.replace(/ /g, '\u00A0')).join('<BR>');

    if (!this.data.authIsInit)
      this.initAuth();

    divIdentify.style.display = 'none';
    divAuth.style.display = '';
  }
  initIdentify() {
    const authClient = Tactics.authClient;
    const divIdentify = this._els.identify;

    const btnContinue = document.createElement('BUTTON');
    btnContinue.name = 'continue';
    btnContinue.textContent = 'Continue';
    btnContinue.addEventListener('click', async () => {
      if (!btnContinue.classList.contains('disabled'))
        try {
          await this.identify(autosave.inputValue);
        } catch(error) {
          btnContinue.classList.add('disabled');
          autosave.error = error.toString();
        }
    });

    const autosave = new Autosave({
      isRequired: true,
      autoFocus: true,
      maxLength: 20,
      value: authClient.token ? authClient.playerName : null,
    }).on('submit', event => {
      event.waitUntil(this.identify(event.data)).catch(error => {
        btnContinue.classList.add('disabled');
      });
    }).on('change', ({ data:name }) => {
      btnContinue.classList.toggle('disabled', name === null);
    });
    this._els.autosave = autosave;

    autosave.appendTo(divIdentify);
    divIdentify.appendChild(btnContinue);

    this.data.identifyIsInit = true;
  }
  renderIdentify() {
    const authClient = Tactics.authClient;
    const divNotice = this._els.notice;
    const divAuth = this._els.auth;
    const divIdentify = this._els.identify;

    if (!authClient.token)
      divNotice.innerHTML = [
        'You are about to create a new account.<BR>',
        'What name would you like to use?',
      ].map(s => s.replace(/ /g, '\u00A0')).join('  ');
    else
      divNotice.textContent = [
        'Please confirm the name you would like to use.',
      ].join('  ');

    if (!this.data.identifyIsInit)
      this.initIdentify();
    divIdentify.querySelector('BUTTON[name=continue]').classList.toggle('disabled', !authClient.token);
    this._els.autosave.value = authClient.token ? authClient.playerName : null;

    divAuth.style.display = 'none';
    divIdentify.style.display = '';
  }

  async identify(name) {
    await Tactics.authClient.setAccountName(name);

    this.renderContent('Please wait...');
    location.reload();
  }
}