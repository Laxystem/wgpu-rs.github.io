(function() {var type_impls = {
"wgpu":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Maintain%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4715\">source</a><a href=\"#impl-Maintain%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4718\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu/enum.MaintainBase.html#tymethod.wait\" class=\"fn\">wait</a>() -&gt; <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a wait variant</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait_for\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4727\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu/enum.MaintainBase.html#tymethod.wait_for\" class=\"fn\">wait_for</a>(submission_index: T) -&gt; <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a WaitForSubmissionIndex variant</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_wait\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4736\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu/enum.MaintainBase.html#tymethod.is_wait\" class=\"fn\">is_wait</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>This maintain represents a wait of some kind.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_index\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4745-4747\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu/enum.MaintainBase.html#tymethod.map_index\" class=\"fn\">map_index</a>&lt;U, F&gt;(self, func: F) -&gt; <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;U&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U,</div></h4></section></summary><div class=\"docblock\"><p>Map on the wait index type.</p>\n</div></details></div></details>",0,"wgpu::api::queue::Maintain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Maintain%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4701\">source</a><a href=\"#impl-Clone-for-Maintain%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4701\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu::api::queue::Maintain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Maintain%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4701\">source</a><a href=\"#impl-Debug-for-Maintain%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"wgpu/enum.MaintainBase.html\" title=\"enum wgpu::MaintainBase\">Maintain</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#4701\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu::api::queue::Maintain"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()