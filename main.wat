(module
    (memory (import "js" "mem") 1)
    (func $selection_sort (param $count i32) (result i32)
        (local $val_index i32)
        (local $last_index i32)
        (local $min_index i32)
        (local $last_sorted_index i32)
        (local $min f64)
        (local $val f64)
        (local $tmp f64)
        (local $swap_a_adress i32)
        (local $swap_b_adress i32)
        (set_local $last_index (i32.sub (get_local $count) (i32.const 1)))
        (set_local $last_sorted_index (i32.const 0))
        (set_local $val_index (i32.const 0))
        (set_local $min_index (i32.const 0))
        (set_local $min (f64.load (i32.const 0)))
        (block $done
            (loop $loop
                (set_local $val_index (if (result i32)
                    (i32.eq (get_local $val_index) (get_local $last_index))
                        (then
                            (set_local $swap_a_adress
                                (i32.mul
                                    (get_local $last_sorted_index)
                                    (i32.const 8)))
                            (set_local $swap_b_adress
                                (i32.mul
                                    (get_local $min_index)
                                    (i32.const 8)))
                            (set_local $tmp (f64.load (get_local $swap_a_adress)))
                            (set_local $min (f64.load (get_local $swap_b_adress)))
                            (f64.store (get_local $swap_a_adress) (get_local $min))
                            (f64.store (get_local $swap_b_adress) (get_local $tmp))
                            (set_local $last_sorted_index (i32.add (get_local $last_sorted_index) (i32.const 1)))
                            (set_local $min_index (get_local $last_sorted_index))
                            (set_local $min (f64.load (i32.mul (get_local $min_index) (i32.const 8))))
                            (br_if $done (i32.eq (get_local $last_sorted_index) (get_local $last_index)))
                            (i32.add (get_local $last_sorted_index) (i32.const 1))
                        )
                        (else
                            (i32.add (get_local $val_index) (i32.const 1)))))
                (set_local $val (f64.load (i32.mul (get_local $val_index) (i32.const 8))))
                (set_local $min_index (if (result i32)
                    (f64.lt (get_local $val) (get_local $min))
                        (then
                            (set_local $min (f64.load (i32.mul (get_local $val_index) (i32.const 8))))
                            (get_local $val_index)
                        )
                        (else (get_local $min_index))))
                (br $loop)))
        (get_local $count)
    )
    (export "selection_sort" (func $selection_sort))
)
