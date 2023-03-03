import { ACTIONS, CallBackProps, EVENTS, STATUS, Step } from "react-joyride";
import { useMount, useSetState } from "react-use";
import Router from "next/router";

interface State {
  run: boolean;
  sidebarOpen: boolean;
  stepIndex: number;
  steps: Step[];
}

const useJoyride = (tutorialSteps: Step[], storageName: string) => {
  const [{ run, sidebarOpen, stepIndex, steps }, setState] = useSetState<State>(
    {
      run: false,
      sidebarOpen: false,
      stepIndex: 0,
      steps: [],
    }
  );

  useMount(() => {
    setState({
      run: true,
      steps: tutorialSteps,
    });
  });

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;

    if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
      setState({ run: false, stepIndex: 0 });
      window.localStorage.setItem(storageName, "true");
    } else if (
      ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND] as string[]).includes(type)
    ) {
      const nextStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);

      if (sidebarOpen && index === 0) {
        setTimeout(() => {
          setState({ run: true });
        }, 400);
      } else if (sidebarOpen && index === 1) {
        setState({
          run: false,
          sidebarOpen: false,
          stepIndex: nextStepIndex,
        });

        setTimeout(() => {
          setState({ run: true });
        }, 400);
      } else if (index === 2 && action === ACTIONS.PREV) {
        setState({
          run: false,
          sidebarOpen: true,
          stepIndex: nextStepIndex,
        });

        setTimeout(() => {
          setState({ run: true });
        }, 400);
      } else {
        setState({
          sidebarOpen: false,
          stepIndex: nextStepIndex,
        });
      }
    }
  };
  const handleResetTutorial = () => {
    window.localStorage.removeItem(storageName);
    Router.reload();
  };
  const isUserFirstTime = window.localStorage.getItem(storageName);
  return {
    run,
    handleJoyrideCallback,
    stepIndex,
    steps,
    handleResetTutorial,
    isUserFirstTime,
  };
};

export default useJoyride;
