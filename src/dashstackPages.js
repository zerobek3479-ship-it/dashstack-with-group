import {
  DashStackTwo,
  DashStackTwentySix,
  DashStackTwentySeven,
  DashStackTwentyNine,
} from './abbos'
import {
  DashStackThree,
  DashStackFour,
  DashStackFive,
  DashStackSix,
  DashStackSeven,
  DashStackEight,
  DashStackNine,
} from './asadbek'
import {
  DashStackTen,
  DashStackEleven,
  DashStackTwelve,
  DashStackThirteen,
  DashStackFourteen,
  DashStackFifteen,
  DashStackSixteen,
  DashStackSeventeen,
} from './shohabbos'
import {
  DashStackEighteen,
  DashStackNineteen,
  DashStackTwenty,
  DashStackTwentyOne,
  DashStackTwentyTwo,
  DashStackTwentyThree,
  DashStackTwentyFour,
  DashStackTwentyFive,
} from './zubayr'
import {
  DashStackThirty,
  DashStackThirtyOne,
  DashStackThirtyTwo,
  DashStackThirtyThree,
  DashStackThirtyFour,
} from './murodjon'
import {
  DashStackThirtyFive,
  DashStackThirtySix,
  DashStackThirtySeven,
  DashStackThirtyEight,
} from './qobiljon'

export const dashstackPages = [
  { label: 'DashStack Two', path: '/dashstack-two', component: DashStackTwo },
  { label: 'DashStack Three', path: '/dashstack-three', component: DashStackThree },
  { label: 'DashStack Four', path: '/dashstack-four', component: DashStackFour },
  { label: 'DashStack Five', path: '/dashstack-five', component: DashStackFive },
  { label: 'DashStack Six', path: '/dashstack-six', component: DashStackSix },
  { label: 'DashStack Seven', path: '/dashstack-seven', component: DashStackSeven },
  { label: 'DashStack Eight', path: '/dashstack-eight', component: DashStackEight },
  { label: 'DashStack Nine', path: '/dashstack-nine', component: DashStackNine },
  { label: 'DashStack Ten', path: '/dashstack-ten', component: DashStackTen },
  { label: 'DashStack Eleven', path: '/dashstack-eleven', component: DashStackEleven },
  { label: 'DashStack Twelve', path: '/dashstack-twelve', component: DashStackTwelve },
  { label: 'DashStack Thirteen', path: '/dashstack-thirteen', component: DashStackThirteen },
  { label: 'DashStack Fourteen', path: '/dashstack-fourteen', component: DashStackFourteen },
  { label: 'DashStack Fifteen', path: '/dashstack-fifteen', component: DashStackFifteen },
  { label: 'DashStack Sixteen', path: '/dashstack-sixteen', component: DashStackSixteen },
  { label: 'DashStack Seventeen', path: '/dashstack-seventeen', component: DashStackSeventeen },
  { label: 'DashStack Eighteen', path: '/dashstack-eighteen', component: DashStackEighteen },
  { label: 'DashStack Nineteen', path: '/dashstack-nineteen', component: DashStackNineteen },
  { label: 'DashStack Twenty', path: '/dashstack-twenty', component: DashStackTwenty },
  { label: 'DashStack Twenty One', path: '/dashstack-twenty-one', component: DashStackTwentyOne },
  { label: 'DashStack Twenty Two', path: '/dashstack-twenty-two', component: DashStackTwentyTwo },
  { label: 'DashStack Twenty Three', path: '/dashstack-twenty-three', component: DashStackTwentyThree },
  { label: 'DashStack Twenty Four', path: '/dashstack-twenty-four', component: DashStackTwentyFour },
  { label: 'DashStack Twenty Five', path: '/dashstack-twenty-five', component: DashStackTwentyFive },
  { label: 'DashStack Twenty Six', path: '/dashstack-twenty-six', component: DashStackTwentySix },
  { label: 'DashStack Twenty Seven', path: '/dashstack-twenty-seven', component: DashStackTwentySeven },
  { label: 'DashStack Twenty Nine', path: '/dashstack-twenty-nine', component: DashStackTwentyNine },
  { label: 'DashStack Thirty', path: '/dashstack-thirty', component: DashStackThirty },
  { label: 'DashStack Thirty One', path: '/dashstack-thirty-one', component: DashStackThirtyOne },
  { label: 'DashStack Thirty Two', path: '/dashstack-thirty-two', component: DashStackThirtyTwo },
  { label: 'DashStack Thirty Three', path: '/dashstack-thirty-three', component: DashStackThirtyThree },
  { label: 'DashStack Thirty Four', path: '/dashstack-thirty-four', component: DashStackThirtyFour },
  { label: 'DashStack Thirty Five', path: '/dashstack-thirty-five', component: DashStackThirtyFive },
  { label: 'DashStack Thirty Six', path: '/dashstack-thirty-six', component: DashStackThirtySix },
  { label: 'DashStack Thirty Seven', path: '/dashstack-thirty-seven', component: DashStackThirtySeven },
  { label: 'DashStack Thirty Eight', path: '/dashstack-thirty-eight', component: DashStackThirtyEight },
]

const hiddenOnboardingPaths = new Set(['/dashstack-twenty-six', '/dashstack-twenty-seven', '/dashstack-twenty-nine'])

export const dashstackSidebarItems = [
  { label: 'Dashboard', path: '/' },
  ...dashstackPages
    .filter(({ path }) => !hiddenOnboardingPaths.has(path))
    .map(({ label, path }) => ({ label, path })),
]
