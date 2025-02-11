import CatGrid from "components/CatGrid";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import {store} from "../src/store/store"

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CatGrid />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
