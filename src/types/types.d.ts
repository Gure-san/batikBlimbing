type Features = 'domAnimation' | 'domMax';

type DispatchActionProp = {
  [name: string]: React.Dispatch<React.SetStateAction<boolean>>
}

type PropsWithChildren<T = any> = {
  children?: React.ReactNode,
  [prop: string]: T
}

type RouteProp = {
  id: string,
  txt: string,
  href: string
}

type Routes = RouteProp[]; 

type NavsProps = {
  routes: Routes,
  currentActiveRoute: string
}

type Mode = "development" | "production";