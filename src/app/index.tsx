import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { BaseLayout } from "@/widgets/layouts";
import { withProvider } from "./providers";
import "./styles/index.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        <NextNProgress
          color="var(--color-blue)"
          height={4}
          options={{ showSpinner: false }}
        />
        <BaseLayout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </BaseLayout>
      </motion.div>
    </AnimatePresence>
  );
};

export default withProvider(App);
