import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/components/Homepage";
import Verify from "@/components/Verify";
import BalancePage from "@/components/BalancePage"
import Profile from "@/components/Profile"
import RecievePage from "@/components/RecievePage";
import OfferPage from "@/components/OfferPage";
import Reward from "@/components/Reward";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<main>
<Homepage/>
</main>
  );
}
