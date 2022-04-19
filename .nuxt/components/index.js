export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as AccountKyc } from '../../components/Account/Kyc.vue'
export { default as AccountPartner } from '../../components/Account/Partner.vue'
export { default as AccountProfile } from '../../components/Account/Profile.vue'
export { default as AccountResetPassword } from '../../components/Account/ResetPassword.vue'
export { default as AccountKYCIDCard } from '../../components/AccountKYC/IDCard.vue'
export { default as AuthCaptcha } from '../../components/Auth/Captcha.vue'
export { default as AuthSocialLogin } from '../../components/Auth/SocialLogin.vue'
export { default as AuthSocialRegister } from '../../components/Auth/SocialRegister.vue'
export { default as CashoutForm } from '../../components/Cashout/Form.vue'
export { default as DashboardSlide } from '../../components/Dashboard/Slide.vue'
export { default as CoreBg } from '../../components/Core/Bg.vue'
export { default as CoreBgIndex } from '../../components/Core/BgIndex.vue'
export { default as CoreBgProfile } from '../../components/Core/BgProfile.vue'
export { default as CoreCity } from '../../components/Core/City.vue'
export { default as CoreComma } from '../../components/Core/Comma.vue'
export { default as CoreHeader } from '../../components/Core/Header.vue'
export { default as CoreImageInput } from '../../components/Core/ImageInput.vue'
export { default as CoreLoading } from '../../components/Core/Loading.vue'
export { default as CoreNotification } from '../../components/Core/Notification.vue'
export { default as CoreStatus } from '../../components/Core/Status.vue'
export { default as CoreTierCard } from '../../components/Core/TierCard.vue'
export { default as CoreTitle } from '../../components/Core/Title.vue'
export { default as HistoryAccountTableApprove } from '../../components/HistoryAccount/TableApprove.vue'
export { default as HistoryAccountTableReject } from '../../components/HistoryAccount/TableReject.vue'
export { default as HistoryAccountTableRequestTest } from '../../components/HistoryAccount/TableRequestTest.vue'
export { default as HomeContract } from '../../components/Home/Contract.vue'
export { default as HomeFooter } from '../../components/Home/Footer.vue'
export { default as HomeNavbar } from '../../components/Home/Navbar.vue'
export { default as ProfilebrandCardBrand } from '../../components/Profilebrand/CardBrand.vue'
export { default as ProfilebrandCardCondition } from '../../components/Profilebrand/CardCondition.vue'
export { default as ProfilebrandRedeemList } from '../../components/Profilebrand/RedeemList.vue'
export { default as RewardCountdown } from '../../components/Reward/Countdown.vue'
export { default as RewardList } from '../../components/Reward/List.vue'
export { default as RewardListDialog } from '../../components/Reward/ListDialog.vue'
export { default as RewardMain } from '../../components/Reward/Main.vue'
export { default as RewardMainBackup } from '../../components/Reward/MainBackup.vue'
export { default as RewardTimmer } from '../../components/Reward/Timmer.vue'
export { default as SemiAutoDetailEA } from '../../components/SemiAuto/DetailEA.vue'
export { default as SemiAutoFromPurchase } from '../../components/SemiAuto/FromPurchase.vue'
export { default as SemiAutoFromPurchaseBak } from '../../components/SemiAuto/FromPurchaseBak.vue'
export { default as SemiAutoFromRequestTest } from '../../components/SemiAuto/FromRequestTest.vue'
export { default as SemiAutoListSemiAuto } from '../../components/SemiAuto/ListSemiAuto.vue'
export { default as UserMenuMainMenu } from '../../components/UserMenu/MainMenu.vue'
export { default as UserMenuMainMenuBackup } from '../../components/UserMenu/MainMenuBackup.vue'
export { default as UserMenuNavMenuGroup } from '../../components/UserMenu/NavMenuGroup.vue'
export { default as UserMenuNavMenuSectionTitle } from '../../components/UserMenu/NavMenuSectionTitle.vue'
export { default as UserMenuNavbarLink } from '../../components/UserMenu/NavbarLink.vue'
export { default as UserMenu } from '../../components/UserMenu/UserMenu.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
