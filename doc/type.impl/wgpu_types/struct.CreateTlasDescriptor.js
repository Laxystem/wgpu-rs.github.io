(function() {var type_impls = {
"wgpu":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; CreateTlasDescriptor&lt;L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_label\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map_label</a>&lt;K&gt;(&amp;self, fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;L</a>) -&gt; K) -&gt; CreateTlasDescriptor&lt;K&gt;</h4></section></summary><div class=\"docblock\"><p>Takes a closure and maps the label of the blas descriptor into another.</p>\n</div></details></div></details>",0,"wgpu::api::tlas::CreateTlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;CreateTlasDescriptor&lt;L&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","wgpu::api::tlas::CreateTlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;CreateTlasDescriptor&lt;L&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","wgpu::api::tlas::CreateTlasDescriptor"],["<section id=\"impl-StructuralEq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-StructuralEq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for CreateTlasDescriptor&lt;L&gt;</h3></section>","StructuralEq","wgpu::api::tlas::CreateTlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-Clone-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; CreateTlasDescriptor&lt;L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu::api::tlas::CreateTlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","wgpu::api::tlas::CreateTlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-Debug-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu::api::tlas::CreateTlasDescriptor"],["<section id=\"impl-StructuralPartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for CreateTlasDescriptor&lt;L&gt;</h3></section>","StructuralPartialEq","wgpu::api::tlas::CreateTlasDescriptor"],["<section id=\"impl-Eq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-Eq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","wgpu::api::tlas::CreateTlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a href=\"#impl-Hash-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for CreateTlasDescriptor&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","wgpu::api::tlas::CreateTlasDescriptor"]],
"wgpu_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7562\">source</a><a href=\"#impl-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_label\" class=\"method\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7564\">source</a><h4 class=\"code-header\">pub fn <a href=\"wgpu_types/struct.CreateTlasDescriptor.html#tymethod.map_label\" class=\"fn\">map_label</a>&lt;K&gt;(&amp;self, fun: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;L</a>) -&gt; K) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;K&gt;</h4></section></summary><div class=\"docblock\"><p>Takes a closure and maps the label of the blas descriptor into another.</p>\n</div></details></div></details>",0,"wgpu_core::resource::TlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7549\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7549\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","wgpu_core::resource::TlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-PartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","wgpu_core::resource::TlasDescriptor"],["<section id=\"impl-StructuralEq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-StructuralEq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;</h3></section>","StructuralEq","wgpu_core::resource::TlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-Clone-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","wgpu_core::resource::TlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7549\">source</a><a href=\"#impl-Serialize-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7549\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","wgpu_core::resource::TlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-Debug-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","wgpu_core::resource::TlasDescriptor"],["<section id=\"impl-StructuralPartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-StructuralPartialEq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;</h3></section>","StructuralPartialEq","wgpu_core::resource::TlasDescriptor"],["<section id=\"impl-Eq-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-Eq-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","wgpu_core::resource::TlasDescriptor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-CreateTlasDescriptor%3CL%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#impl-Hash-for-CreateTlasDescriptor%3CL%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"wgpu_types/struct.CreateTlasDescriptor.html\" title=\"struct wgpu_types::CreateTlasDescriptor\">CreateTlasDescriptor</a>&lt;L&gt;<div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wgpu_types/lib.rs.html#7548\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","wgpu_core::resource::TlasDescriptor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()