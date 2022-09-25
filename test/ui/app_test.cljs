(ns ui.app-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [day8.re-frame.test :as rft]
            [re-frame.core :as rf]))

(eneble-console-print!)

(defn run-all []
  (run-tests))

#_(run-all)

(deftest wha
  (rft/run-test-async
    (is (= 1 1))))
